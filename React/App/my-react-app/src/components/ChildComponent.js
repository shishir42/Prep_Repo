import React, { useEffect } from 'react'

function ChildComponent({data}) {
    console.log(data);
    const [index, setIndex] = React.useState(data);
    useEffect(() => {
        console.log("ChildComponent");
        // for(let i=0; i<100; i++){
        //     setIndex(i);
        //     console.log(i)
        // }
    }, []);

    // const longRunningTask = async () => {

    // }

    
  return (
    <div>ChildComponent-{data}</div>
  )
}

export default ChildComponent


// https://docs.swift.org/swift-book/documentation/the-swift-programming-language/concurrency
// https://www.geeksforgeeks.org/android-tutorial/
// https://medium.com/@sudheer.sandu/multi-tenant-application-68c11cc68929
// https://fuckingswiftui.com/#uikit-equivalent-in-swiftui
// https://www.w3schools.com/typescript/index.php
// https://www.google.com/search?q=interview+questions+on+redux&oq=interview+questions+on+redux+&aqs=chrome..69i57j0i512l2.2923j0j7&sourceid=chrome&ie=UTF-8
// https://www.interviewbit.com/redux-interview-questions/
// https://mindmajix.com/redux-interview-questions
// https://www.knowledgehut.com/interview-questions/redux-interview-questions
// https://flexiple.com/redux/interview-questions/
// https://www.fullstack.cafe/interview-questions/redux
