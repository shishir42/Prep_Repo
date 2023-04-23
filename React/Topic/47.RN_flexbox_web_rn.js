
// CSS Flexbox is used to design a responsive layout easily without using float or position CSS property. Float and position values were used to build any type of UI which are not very easy. Flexbox is added in CSS3. Flexbox is designed to provide a consistent layout on different screen sizes. You will normally use a combination of flexDirection, alignItems, and justify-content to achieve the right layout. 

// There are few differences in default values of few flex based CSS properties between React Native and on the browser. The default value of flexDirection is a row in the web but in case of React native, its default value is a column. Also, flex parameter only supports a single number in React native. Flexbox alignItems has few more values like flex-start which start aligning element from start and opposite of this is flex-end which places the first child element at the end. Similar to alignItems, justifyContents also have values which behaves where much similar to flexbox behaviour in a web browser.


// JustifyContent property aligns the flexible container's items when the items do not use all available space on the main axis. By default, the main axis is a vertical axis in case of React native. Which means justifyContent property aligns child elements of flex parent vertically in React native.  We can use this property to layout elements in a flex container. JustifyContent supports the following values: flex-start|flex-end|centre|space-between|space-around|initial|inherit; It also apply some control over the alignment of items when they overflow the line. Let me explain JustifyContent’s values:

// flex-start: this is the default value for justifyContent. It means that flex items will start from the top and evenly distributed vertically.
// Flex-end: this is just the opposite behaviour of flex-start. Elements start rendering from the bottom
// Center: Items will be placed in the middle
// Space-between: elements are evenly distributed along the main axis (vertical axis)
// Space-around: flex items will be evenly distributed with equal space around them

// You can think of alignItems as justifyContent behaviour for cross axis. Cross-axis in case if React native is the horizontal axis. CSS alignItems property sets the alignSelf value on all direct children as a group. In Flexbox, it controls the alignment of items on the cross axis. By default, the cross axis is a horizontal axis in case of React native. We can use this property to layout elements in the flex container. The alignItems property supports following values: stretch|center|flex-start|flex-end|baseline|initial|inherit;  Let me explain alignItems values:

// flex-start: this is the default value for alignItems. It means that flex items will start from the left and evenly distributed horizontally.
// Flex-end: this is just the opposite behaviour of flex-start. Elements start rendering from the right and go up to the left end.
// Center: Items will be placed in the middle
// Space-between: elements are evenly distributed along the cross axis (horizontal  axis)
// Space-around: flex items will be evenly distributed with equal space around them

// How can we change the default behaviour of the main axis and cross axis of flexbox layout?

// By default, the main axis is the vertical axis and cross axis is the horizontal axis in React native. Since justifyContent and alignItems property works based on the main axis and cross axis, so justifyContent will align flex items vertically and alignItems will layout flex item horizontally. This default value of the main axis and cross axis can be changed by changing flexDirection property. If we set flexDirection to row in the flex container then the main axis will become horizontal axis and cross axis will become vertical axis. 

// On changing default behaviour via flexDirection CSS property, the behaviour of alignItems and justifyContent will also get switched. The Concept of flexDirection is also present on the web. Flexbox is implemented as a single direction layout technique and this direction is managed by flexDirection CSS property. Apart from row and column, the flexDirection property has two more values: row-reverse and column-reverse. As the name suggests, the direction will remain horizontal and vertical but the direction will get changed.

// What are the differences between Flexbox in browser and in React Native?

// The default value in React Native is column, whereas the default value for CSS is row
// The default value in React Native is flex-start, whereas the default value for CSS is stretch
// The default value in React Native is 0, whereas the default value for CSS is 1
