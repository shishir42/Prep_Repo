https://levelup.gitconnected.com/16-system-design-concepts-i-wish-i-knew-before-the-interview-b8586e40a73b#c51b

https://www.designgurus.io/course/grokking-the-advanced-system-design-interview

https://www.educative.io/courses/grokking-the-system-design-interview/gx7wZzWn5Vj

https://www.linkedin.com/feed/update/urn:li:activity:7062652652798533632/

https://www.linkedin.com/feed/update/urn:li:activity:7062337245847916544/

𝟳 𝗔𝗹𝗴𝗼𝗿𝗶𝘁𝗵𝗺𝘀 𝘁𝗼 𝗞𝗻𝗼𝘄 𝗕𝗲𝗳𝗼𝗿𝗲 𝗬𝗼𝘂𝗿 𝗡𝗲𝘅𝘁 𝗦𝘆𝘀𝘁𝗲𝗺 𝗗𝗲𝘀𝗶𝗴𝗻 𝗜𝗻𝘁𝗲𝗿𝘃𝗶𝗲𝘄

𝟭) 𝗠𝗲𝗿𝗸𝗹𝗲 𝗧𝗿𝗲𝗲
Used for identifying data inconsistencies between servers.

Distributed systems aim to improve reliability and availability by storing data across multiple servers. Each server holds a copy of the data, which can be quite substantial. To identify any differences between the data on different servers, Merkle Trees are utilized. Calculating checksums for the entire data range to compare replicas is impractical due to the vast amount of data that needs to be transferred. Instead, Merkle Trees are used to compare ranges of data across replicas.

Details: [https://lnkd.in/gZpt67uU](https://lnkd.in/gZpt67uU)

𝟮) 𝗖𝗼𝗻𝘀𝗶𝘀𝘁𝗲𝗻𝘁 𝗛𝗮𝘀𝗵𝗶𝗻𝗴
Distributed systems use Consistent Hashing to distribute data across servers.

Consistent Hashing helps with two things:

1. It maps data to physical servers. Whenever the system wants to read or write data, Consistent Hashing tells us which server holds the data.
2. It ensures that only a small set of keys move when servers are added or removed.

Details: [https://lnkd.in/dJQKjN6i](https://lnkd.in/dJQKjN6i)

𝟯) 𝗥𝗲𝗮𝗱 𝗥𝗲𝗽𝗮𝗶𝗿
When the data is replicated across multiple servers, Read Repair is used to push the latest version of data to servers with older version.

Repair stale data during the read operation, since at that point, we can read data from multiple servers to compare and find servers with stale data.

Details: [https://lnkd.in/g6kCVgvr](https://lnkd.in/g6kCVgvr)

𝟰) 𝗚𝗼𝘀𝘀𝗶𝗽 𝗣𝗿𝗼𝘁𝗼𝗰𝗼𝗹
Used for efficiently sharing state information between servers.

Each server keeps track of state information about other servers in the cluster and gossips (i.e., shares) this information with one random server every second. This way, eventually, each server gets to know about the state of every other node in the cluster.

Details: [https://bit.ly/3D2w14j](https://bit.ly/3D2w14j)

𝟱) 𝗕𝗹𝗼𝗼𝗺 𝗙𝗶𝗹𝘁𝗲𝗿
Bloom filters are used to quickly find if an element might be present in a set.

Details: [https://bit.ly/3TbSAsR](https://bit.ly/3TbSAsR)

𝟲) 𝗛𝗲𝗮𝗿𝘁𝗯𝗲𝗮𝘁
Used for broadcasting the health status of a server.

Each server periodically sends a heartbeat message to a central monitoring server or other servers in the system to show that it is still alive and functioning.

Details: [https://bit.ly/3eFnT04](https://bit.ly/3eFnT04)

𝟳) 𝗖𝗔𝗣/𝗣𝗔𝗖𝗘𝗟𝗖 𝗧𝗵𝗲𝗼𝗿𝗲𝗺𝘀
With the help of these two theorems, distributed systems can choose a good balance between Consistency, Availability, Partition Tolerance, and Latency.

Details: [https://lnkd.in/dTFksWj9](https://lnkd.in/dTFksWj9)
