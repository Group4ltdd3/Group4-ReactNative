// khỏi tạo mảng
var mang1; 
mang1 = ["Hoàng","Quân","Phúc","Việt"] 
var mang2 = new Array("Mary","Tom","Jack","Jill") 


// truy cập đến phần tử của mảng
console.log(mang1[0]);// truy cập phần tử đầu tiên của mảng
console.log(mang1[2]);// trập cập phần tử thứ 3 của mảng

// lặp qua một mảng
mang1.forEach(function(item, index, array) {
    console.log(item, index);
  });

// duyệt mảng bằng vòng lặp for
mang2
for(var i = 0;i<mang2.length;i++) { 
   console.log(mang2[i]) // hiển thị các phần tử của mảng
}

// sử dụng các phương thức

// chiều dài của mảng
console.log(mang1.length);
// phương thức concat() dùng để kết nối 2 hay nhiều mảng với nhau.
console.log(mang1.concat(mang2));

// phương thức pop()
console.log(mang1.pop());