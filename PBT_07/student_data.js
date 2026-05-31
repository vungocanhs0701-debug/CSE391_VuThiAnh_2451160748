const students = [
    { name: "An", math: 8, physics: 7, cs: 9, gender: "M" },
    { name: "Bình", math: 6, physics: 9, cs: 7, gender: "F" },
    { name: "Chi", math: 9, physics: 6, cs: 8, gender: "F" },
    { name: "Dũng", math: 5, physics: 5, cs: 6, gender: "M" },
    { name: "Em", math: 10, physics: 8, cs: 9, gender: "F" },
    { name: "Phong", math: 3, physics: 4, cs: 5, gender: "M" },
    { name: "Giang", math: 7, physics: 7, cs: 7, gender: "F" },
    { name: "Huy", math: 4, physics: 6, cs: 3, gender: "M" },
];

let gioi = 0;
let kha = 0;
let trungBinh = 0;
let yeu = 0;

let maxStudent = null;
let minStudent = null;

let tongMath = 0;
let tongPhysics = 0;
let tongCS = 0;

let tongTBNam = 0;
let tongTBNu = 0;
let soNam = 0;
let soNu = 0;

console.log("STT\tTên\tTB\tXếp loại");
console.log("--------------------------------");

for (let i = 0; i < students.length; i++) {

    let s = students[i];

    let tb =
        s.math * 0.4 +
        s.physics * 0.3 +
        s.cs * 0.3;

    let xepLoai = "";

    if (tb >= 8) {
        xepLoai = "Giỏi";
        gioi++;
    }
    else if (tb >= 6.5) {
        xepLoai = "Khá";
        kha++;
    }
    else if (tb >= 5) {
        xepLoai = "Trung bình";
        trungBinh++;
    }
    else {
        xepLoai = "Yếu";
        yeu++;
    }

    console.log(
        (i + 1) + "\t" +
        s.name + "\t" +
        tb.toFixed(1) + "\t" +
        xepLoai
    );

    s.average = tb;
    s.rank = xepLoai;

    if (maxStudent === null || tb > maxStudent.average) {
        maxStudent = s;
    }

    if (minStudent === null || tb < minStudent.average) {
        minStudent = s;
    }

    tongMath += s.math;
    tongPhysics += s.physics;
    tongCS += s.cs;

    if (s.gender === "M") {
        tongTBNam += tb;
        soNam++;
    } else {
        tongTBNu += tb;
        soNu++;
    }
}

console.log("\n===== THỐNG KÊ =====");

console.log("Số SV Giỏi:", gioi);
console.log("Số SV Khá:", kha);
console.log("Số SV Trung bình:", trungBinh);
console.log("Số SV Yếu:", yeu);

console.log(
    "\nSV điểm cao nhất:",
    maxStudent.name,
    "-",
    maxStudent.average.toFixed(1)
);

console.log(
    "SV điểm thấp nhất:",
    minStudent.name,
    "-",
    minStudent.average.toFixed(1)
);

console.log("\n===== TB TOÀN LỚP =====");

console.log(
    "Toán:",
    (tongMath / students.length).toFixed(2)
);

console.log(
    "Lý:",
    (tongPhysics / students.length).toFixed(2)
);

console.log(
    "CS:",
    (tongCS / students.length).toFixed(2)
);

console.log("\n===== BONUS =====");

console.log(
    "TB Nam:",
    (tongTBNam / soNam).toFixed(2)
);

console.log(
    "TB Nữ:",
    (tongTBNu / soNu).toFixed(2)
);
