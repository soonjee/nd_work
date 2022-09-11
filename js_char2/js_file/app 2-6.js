// #2.6 Objects
//object를 통해 데이터를 받을 수 있고 업데이트도 가능하다!

const player = {
    name:"soon",
    point: 10,
    fat: true,
}; //property를 가진 데이터를 저장하도록 해준다.
//array로 할수도 있지만 그 자체로 무엇을 의미하는지 알 수 없었음.

console.log(player);
player.point = player.point + 15; //오브젝트에 추가하는 방법
console.log(player.point); //const지만 obhject 추가 후 콘솔로 찍어봤을때 추가가 된 게 확인됨
