// const borishKelishList = document.querySelectorAll('.borishKelishList')
// const borishKelish = document.querySelectorAll('.borish_kelish')
// const borishItem = document.querySelectorAll('.borish_item')
// const borishValue = document.querySelectorAll('.borish_value')

// // console.log()
// const borishKelishBorder = () => {

// }
// borishKelish.forEach((select, i) => {
//   select.addEventListener('click', () => {
//     borishKelishList[i].classList.forEach((item) => {
//       if (item != "hidden") {
//         borishKelishList.forEach((item) => {
//           item.classList.add('hidden')
//           borishKelish[0].classList.remove('outline')
//           borishKelish[1].classList.remove('outline')
//         })
//         borishKelishList[i].classList.add('hidden')
//       } else {
//         borishKelishList[i].classList.remove('hidden')
//         borishKelish[i].classList.add('outline-2')
//         borishKelish[i].classList.add('outline-[#605DEC]')
//         borishKelish[i].classList.add('outline')
//       }
//     })
//     borishKelishList[i].querySelectorAll('.borish_item').forEach((item) => {
//       item.addEventListener('click', () => {
//         borishValue[i].innerHTML = item.innerHTML
//       })
//     })
//   })
// })
// borishItem.forEach((item) => {
//   item.addEventListener('click', () => {
//     borishKelish.forEach((itemSelect) => {
//       itemSelect.classList.remove('outline')
//     })

//     borishKelishList.forEach((itemLI) => {
//       itemLI.classList.add('hidden')
//     })
//   })
// })