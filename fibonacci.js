// tính dãy số fibonacci bằng đệ quy

// dãy số fibonacci hoạt động -->  F(n) = F(n-1) + F(n-2)

function fibonacci(number) {
	
  if (number <= 0) return console.error(" Maximum call stack size exceeded !");
	if (number === 1 || number === 2) return 1;

  return fibonacci(number - 1) + fibonacci(number - 2);
}
console.log('Giá trị của dãy số fibonacci : ', fibonacci(7)); // check đủ giá trị nhập vào

// đoạn này mục đích là check thử xem nhập string vào nó có chạy hay ko, để ép đk cho cái trên chặt hơn.
function kTra(a) {
  if (a >= 2) {
    return true;
  } else {
    return false;
  }
}
console.log(kTra("2"));
