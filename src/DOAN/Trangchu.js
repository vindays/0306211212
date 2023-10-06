
import LoaiSanPham from "./loai_san_pham";
import '../styles/Home.css';
function Trangchu(){
  const dsLoaiSanPham=[
    {
      'ten':'Loai San Pham 1',
      'ds_san_pham':[
        {
          'hinh_anh':'./Tui1.jpeg',
          'ten':'túi xinh',
          'gia':'1000',

        },
        {
          'hinh_anh':'./Tui1.jpeg',
          'ten':'túi đẹp ',
          'gia':'1000',

        },
        
      ]
    },
    {
      'ten':'Loai San Pham 2',
      'ds_san_pham':[
        {
          'hinh_anh':'Tui2.jpeg',
          'ten':'túi xin',
          'gia':'1000',
        },
        {
          'hinh_anh':'Tui2.jpeg',
          'ten':'túi xinh',
          'gia':'1000',
        }
        
      ]
      
      
    }
  ];


  const listLoaiSanPham=dsLoaiSanPham.map(function(item){
    return(

      <LoaiSanPham data ={item}/>
    );
  });
  return(
    <>
    {listLoaiSanPham}</>
  )
};


export default Trangchu;