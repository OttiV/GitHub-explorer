// import React, { lazy, Suspense, useEffect, useState } from "react";
// import { Pagination } from "./components";
// import "./HomePage.css";
// import { baseUrl } from "../../constants";
// // const ReposListContainer = lazy(() =>
// //   import("./components/ReposListContainer")
// // );

// function HomePage() {
//   // const [time, setTime] = useState("");
//   // const [error, setError] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [reposPerPage] = useState(10);
//   // useEffect(() => {
//   //   const startTime = new Date().getTime();
//   //   fetch(baseUrl)
//   //     .then(res => res.json())
//   //     .then(data => {
//   //       if (data.mesage) {
//   //         setError(data.mesage);
//   //       } else {
//   //         setRepos(data);
//   //       }
//   //     });
//   //   const endTime = new Date().getTime();
//   //   const time = endTime - startTime;
//   //   setTime(time);
//   //   setSearch("");
//   // }, []);

//   // PAGINATION
//   // const indexOfLastRepo = currentPage * reposPerPage;
//   // const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
//   // const currentRepos = repos.slice(indexOfFirstRepo, indexOfLastRepo);

//   // const filteredRepos =
//   //   repos &&
//   //   currentRepos.filter(repo =>
//   //     repo.name.toLowerCase().includes(search.toLowerCase())
//   //   );

//   // const paginate = pageNumber => setCurrentPage(pageNumber);

//   return (
//     <div className="container">
//       <Suspense fallback={<div>Loading...</div>}>
//         <ReposListContainer />
//         {/* <Pagination
//           reposPerPage={reposPerPage}
//           totalRepos={repos.length}
//           paginate={paginate}
//         /> */}
//       </Suspense>
//     </div>
//   );
// }

// export default HomePage;
