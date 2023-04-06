// Import necessary libraries
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');

// Initialize Express app
const app = express();

// Set up middleware
app.use(bodyParser.json());

// Define product catalog route
app.get('/products', async (req, res) => {
  try {
    // Query database for product list
    const products = await Product.find();

    // Send product list to user
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Define add to cart route
app.post('/cart', async (req, res) => {
  // Get user ID from JWT token
  const userId = req.user.userId;

  // Get product ID and quantity from request body
  const { productId, quantity } = req.body;

  try {
    // Update user's cart in database
    const cart = await Cart.findOneAndUpdate(
      { userId },
      { $push: { items: { productId, quantity } } },
      { upsert: true, new: true }
    );

    // Send updated cart information to user
    res.json(cart);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Define checkout route
app.post('/checkout', async (req, res) => {
  // Get user ID from JWT token
  const userId = req.user.userId;

  try {
    // Create new order in database
    const order = new Order({ userId });
    await order.save();

    // Update inventory in database
    for (const item of req.body.items) {
      const product = await Product.findById(item.productId);
      product.quantity -= item.quantity;
      await product.save();
    }

    // Process payment using payment gateway (e.g. Stripe)

    // Send email/SMS notification to user with tracking information

    // Send response to user with order information
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Define order history route
app.get('/orders', async (req, res) => {
  // Get user ID from JWT token
  const userId = req.user.userId;

  try {
    // Query database for user's order history
    const orders = await Order.find({ userId });

    // Send order history to user
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start server
app.listen(3000, () => console.log('Server started on port 3000'));


/***************************/
/*
// Import necessary libraries
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { Schema } = mongoose;

// Initialize Express app
const app = express();

// Set up middleware
app.use(bodyParser.json());

// Set up MongoDB connection
mongoose.connect('mongodb://localhost/e-commerce-app', { useNewUrlParser: true });

// Define product schema
const productSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  image: { type: String }
});

const Product = mongoose.model('Product', productSchema);

// Define cart schema
const cartSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  items: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
});

const Cart = mongoose.model('Cart', cartSchema);

// Define order schema
const orderSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  items: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
  totalPrice: { type: Number, required: true },
  status: { type: String, default: 'Pending' }
});

const Order = mongoose.model('Order', orderSchema);

// Define user schema
const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

// Define middleware for JWT authentication
const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

// Define routes for product catalog
app.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Define routes for cart management
app.get('/cart', authenticateJWT, async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user.userId }).populate('items');
    res.json(cart);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/cart', authenticateJWT, async (req, res) => {
  try {
    const { productId } = req.body;

    // Check if product exists
    const product = await Product.findById(productId);
    if (!product) {
      throw new Error('Product not found');
    }

    // Add product to user's cart
    const cart = await Cart.findOneAndUpdate(
      { user: req.user.userId },
      { $push: { items: product._id } },
      { upsert: true, new: true }
    ).populate('items');

    res.json(cart);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
*/
 
/******************************/



/*
// Import necessary libraries
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Initialize Express app
const app = express();

// Set up middleware
app.use(bodyParser.json());

// Connect to MongoDB database
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Define Product schema
const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  image: String,
  quantity: Number
});
const Product = mongoose.model('Product', productSchema);

// Define User schema
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  cart: [{
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    quantity: Number
  }]
});
userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
  return token;
};
const User = mongoose.model('User', userSchema);

// Define Order schema
const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  products: [{
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    quantity: Number
  }],
  total: Number,
  status: { type: String, default: 'Pending' }
});
const Order = mongoose.model('Order', orderSchema);

// Define routes for product catalog
app.get('/products', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Define routes for cart management
app.post('/cart', async (req, res) => {
  const { productId, quantity } = req.body;
  const product = await Product.findById(productId);
  const token = req.header('Authorization').replace('Bearer ', '');
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const user = await User.findById(decoded._id);
  const existingCartItem = user.cart.find(item => item.product == productId);

  if (existingCartItem) {
    existingCartItem.quantity += quantity;
  } else {
    user.cart.push({ product: product._id, quantity });
  }

  await user.save();
  res.json(user.cart);
});
*/

/*********
 
// Import necessary libraries
const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Initialize Express app
const app = express();

// Set up middleware
app.use(bodyParser.json());

// Define sample product catalog
const products = [
  {
    id: '1',
    name: 'Product 1',
    price: 10.00,
    description: 'This is product 1',
    image: 'https://via.placeholder.com/150x150.png',
    quantity: 10
  },
  {
    id: '2',
    name: 'Product 2',
    price: 20.00,
    description: 'This is product 2',
    image: 'https://via.placeholder.com/150x150.png',
    quantity: 5
  },
  {
    id: '3',
    name: 'Product 3',
    price: 30.00,
    description: 'This is product 3',
    image: 'https://via.placeholder.com/150x150.png',
    quantity: 3
  }
];

// Define sample orders
const orders = [];

// Define route for getting product catalog
app.get('/products', (req, res) => {
  res.json(products);
});

// Define route for adding product to cart
app.post('/cart', (req, res) => {
  // Get product ID and quantity from request body
  const { productId, quantity } = req.body;

  // Find product in catalog by ID
  const product = products.find((p) => p.id === productId);

  if (!product) {
    res.status(404).json({ error: 'Product not found' });
    return;
  }

  // Check if product quantity is sufficient
  if (product.quantity < quantity) {
    res.status(400).json({ error: 'Insufficient product quantity' });
    return;
  }

  // Update product quantity in catalog
  product.quantity -= quantity;

  // Add product to cart
  req.session.cart = req.session.cart || {};
  req.session.cart[productId] = (req.session.cart[productId] || 0) + quantity;

  res.json({ message: 'Product added to cart' });
});

// Define route for getting cart information
app.get('/cart', (req, res) => {
  // Get product IDs and quantities from cart
  const cart = req.session.cart || {};
  const items = Object.keys(cart).map((productId) => {
    const product = products.find((p) => p.id === productId);
    return {
      product,
      quantity: cart[productId]
    };
  });

  res.json({ items });
});

// Define route for checkout process
app.post('/checkout', async (req, res) => {
  // Get cart information from session
  const cart = req.session.cart || {};

  // Calculate total amount of the order
  let totalAmount = 0;
  Object.keys(cart).forEach((productId) => {
    const product = products.find((p) => p.id === productId);
    totalAmount += product.price * cart[productId];
  });
 */


  /**********/

/*

  // Import necessary libraries
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

// Initialize Express app
const app = express();

// Set up middleware
app.use(bodyParser.json());

// Connect to MongoDB database
mongoose.connect('mongodb://localhost/ecommerce', { useNewUrlParser: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Define product schema
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  image: String,
  inventory: Number
});

// Define user schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  cart: [{
    productId: String,
    quantity: Number
  }],
  orders: [{
    products: [{
      productId: String,
      quantity: Number
    }],
    shippingAddress: String,
    status: String,
    timestamp: Date
  }]
});

// Define models
const Product = mongoose.model('Product', productSchema);
const User = mongoose.model('User', userSchema);

// Define route for user authentication
app.post('/login', async (req, res) => {
  // Get user data from request body
  const { email, password } = req.body;

  try {
    // Check if user exists in database
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('User not found');
    }

    // Compare password with hashed password in database
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      throw new Error('Invalid password');
    }

    // Generate JWT token and send response to user
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    res.json({ token });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
});

// Define route for product catalog
app.get('/products', async (req, res) => {
  try {
    // Query database for list of products
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Define route for adding product to cart
app.post('/cart', async (req, res) => {
  // Get user ID from JWT token
  const userId = req.user.userId;

  // Get product ID and quantity from request body
  const { productId, quantity } = req.body;

  try {
    // Find user in database and update cart with new product
    const user = await User.findByIdAndUpdate(userId, { $addToSet: { cart: { productId, quantity } } }, { new: true });
    res.json(user.cart);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

*/



// Developing a scalable application in Node.js involves implementing several best practices and utilizing various tools to ensure that the application can handle an increasing number of users and data. Here are some steps that you can follow to build an end-to-end scalable application in Node.js:
// Use a scalable architecture: Use a modular architecture such as the Model-View-Controller (MVC) architecture to divide your application into smaller modules and simplify its design. It also makes it easy to add new features and scale your application.
// Use asynchronous programming: Node.js is built on an asynchronous programming model, which means that it can handle multiple requests simultaneously. Asynchronous programming allows your application to handle multiple requests simultaneously, which can help reduce latency and increase throughput.
// Use a load balancer: A load balancer can help distribute incoming requests evenly across multiple servers or instances. This ensures that your application can handle a large number of requests without overloading any single server.
// Use caching: Caching can help reduce the number of requests made to the server by storing frequently accessed data in memory or on disk. This can significantly improve the performance of your application.
// Use a database: Use a database to store and manage data in your application. Relational databases such as MySQL or PostgreSQL are suitable for most applications, while NoSQL databases such as MongoDB or Cassandra are better suited for applications that require high scalability and availability.
// Use a cloud platform: Deploy your application to a cloud platform such as AWS, Azure, or Google Cloud Platform. These platforms provide scalable infrastructure and tools for deploying and managing your application.
// Use monitoring and logging: Monitor your application's performance and track errors using tools such as Prometheus, Grafana, or Elastic Stack. This allows you to identify and fix performance issues before they become critical.

// Sure, here's an example of an end-to-end flow in Node.js for a basic e-commerce application:
// User authentication: When a user wants to log in or create an account, they will make a request to the Node.js server. The server will authenticate the user using a JWT (JSON Web Token) and return a response with the user's data or an error message.
// Product catalog: When a user wants to view a product catalog, the Node.js server will query the database for the list of products and return a response to the user with the product information.
// Cart management: When a user adds a product to their cart, the Node.js server will update the user's cart in the database and return a response to the user with the updated cart information.
// Checkout process: When a user initiates the checkout process, the Node.js server will create a new order in the database and update the inventory accordingly. The server will also initiate payment processing using a payment gateway such as Stripe or PayPal.
// Order history: When a user wants to view their order history, the Node.js server will query the database for the user's order history and return a response to the user with the order information.
// Shipping and tracking: When an order is shipped, the Node.js server will update the order status and tracking information in the database. The server will also send email or SMS notifications to the user with the tracking information.
// Customer support: When a user wants to contact customer support, the Node.js server will handle the user's request and forward it to the appropriate team member. The server will also update the database with the user's support ticket information.
// This is just a basic example, and there are many other components and features that could be added to an e-commerce application. However, this should give you an idea of how a Node.js application could handle a typical end-to-end flow for an e-commerce application.

// To improve the above code for scalability, we can do the following:
// Use a reverse proxy: We can use a reverse proxy like Nginx or Apache to distribute the incoming traffic across multiple Node.js instances. This helps distribute the load and improve the overall performance of the application.
// Implement load balancing: We can implement load balancing techniques like Round Robin, Least Connections, or IP Hash to distribute the incoming traffic across multiple Node.js instances. This helps ensure that no single instance is overwhelmed by too many requests.
// Use a caching layer: We can use a caching layer like Redis or Memcached to cache frequently accessed data like product catalogs, cart information, and order history. This helps reduce the load on the database and improve the overall performance of the application.
// Optimize database queries: We can optimize the database queries to ensure they're as efficient as possible. This includes using indexes, avoiding nested loops, and minimizing the number of queries required to retrieve the required data.
// Implement asynchronous code: We can implement asynchronous code using Promises or async/await to ensure that the Node.js event loop is not blocked by long-running operations. This helps ensure that the application remains responsive and can handle multiple requests simultaneously.
// Use a CDN: We can use a Content Delivery Network (CDN) like Cloudflare or Akamai to cache and deliver static assets like images, CSS files, and JavaScript files. This helps reduce the load on the server and improve the overall performance of the application.
// Use a message queue: We can use a message queue like RabbitMQ or Kafka to decouple different parts of the application and improve the overall scalability. This includes offloading long-running operations like payment processing and email notifications to separate workers that can be scaled independently of the main application.
// By implementing these techniques, we can improve the scalability of the e-commerce application and ensure that it can handle a large number of requests without experiencing performance issues.

