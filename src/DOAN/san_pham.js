import { Button } from 'bootstrap';
import '../bootstrap-5.2.3/css/bootstrap.min.css'
function SanPham(props) {
    return (



        <div class="col-md-4" >
            <img src={props.data.hinh_anh} />
            <p>{props.data.ten}</p>
            <button>Mua ngay</button>
            <button>Thêm vào</button>
            
            

        </div>



    )
}
export default SanPham;