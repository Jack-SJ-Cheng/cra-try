export default function Cart() {
  return (
    <div className="bg-light p-3">
      <table className="table align-middle">
        <tbody>
          <tr>
            <td>
              <a href="#">x</a>
            </td>
            <td>
              <img
                src="https://plus.unsplash.com/premium_photo-1714146015360-60482004897b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJlZCUyMGJlYW4lMjBjYWtlfGVufDB8fDB8fHww"
                alt="產品圖"
                className="cart-img"
              />
            </td>
            <td>
              紅豆奶油蛋糕
              <br />
              <small>NT$ 220</small>
            </td>
            <td>
              <select className="form-select"></select>
            </td>
            <td className="text-end">NT$ 220</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td className="text-end" colSpan={5}>
              總計 NT$ 220
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
