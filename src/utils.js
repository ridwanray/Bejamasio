// export const nodeMan =()=>{
//     console.log('coming from utils...node man')
// }

// export const handleCategoryFilterCheckboxChange = (e) => {
//     // console.log(e.target.value, e.target.checked);
//     const checkedStatus = e.target.checked;

//     const newFIlter = (value) => {
//       const result = productSortByCategories.filter(
//         (categoryword) => categoryword !== value
//       );
//       console.log(result);
//       setProductSortByCategories(result);
//     };

//     checkedStatus
//       ? setProductSortByCategories([...productSortByCategories, e.target.value])
//       : newFIlter(e.target.value);
//   };