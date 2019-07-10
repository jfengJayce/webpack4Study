import * as _ from 'lodash';
// console.log(_.chunk([1, 2, 3, 4, 5], 2))
console.log(_.chunk(2))
const NUM = 45;
interface Cat {
  name: String,
  gender: String
}
function touchCat(cat: Cat) {
  console.log(`name: ${cat.name}, gender: ${cat.gender}`);
}
touchCat({
  name: 'Tom',
  gender: 'male'
})