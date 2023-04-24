namespace Design
{
    public class Node 
    {
        public int Key {get; set;}
        public int Value {get; set;}
        public Node? Next {get; set;}
    }

    public class HashMapL
    {
        private readonly int size;
        private readonly Node[] table;

        public HashMapL(int size)
        {
            this.size = size;
            this.table = new Node[size];
        }

        private int GetHash(int key)
        {
            return key % this.size;
        }

        public void Put(int key, int value)
        {
            int index = GetHash(key);
            Node newNode = new Node { Key = key, Value = value };

            if(table[index] == null)
            {
                table[index] = newNode;
            }
            else
            {
                Node? currentNode = table[index];
                while(currentNode != null && currentNode.Key != key)
                {
                    currentNode = currentNode.Next;
                }

                if(currentNode?.Key == key)
                {
                    currentNode.Value = value;
                }
                else
                {
                    currentNode.Next = newNode;
                }

            }
        }

        public int Get(int key)
        {
            int index = this.GetHash(key);
            Node currentNode = table[index];
            while(currentNode != null)
            {
                if(currentNode.Key == key)
                {
                    return currentNode.Value;
                }

                currentNode = currentNode.Next;
            }

            throw new Exception("Key not found");
        }

        public void Remove(int key)
        {
            int index = GetHash(key);
            Node currentNode = table[index];
            Node previousNode = null;

            while(currentNode != null && currentNode.Key != key)
            {
                previousNode = currentNode;
                currentNode = currentNode.Next;
            }

            if(currentNode == null)
            {
                throw new Exception("Key not found");
            }

            if(previousNode == null)
            {
                table[index] = currentNode.Next;
            }
            else
            {
                previousNode.Next = currentNode.Next;
            }
        }

        public static void Driver()
        {
            HashMapL map = new HashMapL(10);
            map.Put(1, 10);
            map.Put(2, 20);
            map.Put(3, 30);
            map.Put(4, 40);
            map.Put(5, 50);

            // Retrieving elements from the HashMap
            int value1 = map.Get(1); // value1 will be 10
            int value2 = map.Get(2); // value2 will be 20

            Console.WriteLine("Get value " + value1 + " " + value2);

            // Removing elements from the HashMap
            map.Remove(3);

            // Updating existing element in the HashMap
            map.Put(1, 100);

            int updatedValue1 = map.Get(1); // updatedValue1 will be 100
            Console.WriteLine("updatedValue1 " + updatedValue1);
        }
    }
}