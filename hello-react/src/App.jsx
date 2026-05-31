function SimpleVariables() {
  const ten = "Vũ Thị Anh";
  const tuoi = 19;
  const queQuan = "Thanh Hóa";

  const canNang = 50;
  const chieuCao = 1.6;

  const bmi = (canNang / (chieuCao * chieuCao)).toFixed(2);

  const gio = new Date().getHours();

  const loiChao =
      gio < 12
          ? "Chào buổi sáng"
          : gio < 18
          ? "Chào buổi chiều"
          : "Chào buổi tối";

  return (
      <div style={{ padding: "20px" }}>
          <h1>{loiChao}</h1>

          <p>Họ tên: {ten}</p>

          <p>Tuổi: {tuoi}</p>

          <p>Năm sau: {tuoi + 1}</p>

          <p>Quê quán: {queQuan}</p>

          <p>BMI: {bmi}</p>
      </div>
  );
}

export default SimpleVariables;
