import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import watch from '../images/watch.jpg'
import {AiFillDelete} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import Container from '../components/Container';
const Cart = () => {
  return (
   <>
    <Meta title={"Cart"} />
    <BreadCrumb title="Cart" />
    <Container class1='cart-wrapper home-wrapper-2 py-5'>
      <div className='row'>
       <div className='col-12'>
        <div className='cart-header py-3 d-flex justify-content-between align-items-center'>
         <h4 className='cart-col-1'>Sản Phẩm</h4>
         <h4 className='cart-col-2'>Giá</h4>
         <h4 className='cart-col-3'>Số Lượng</h4>
         <h4 className='cart-col-4'>Tổng Tiền</h4>
        </div>
        <div className='cart-data py-3 mb-2 d-flex justify-content-between align-items-center'>
         <div className='cart-col-1 gap-15 d-flex align-items-center'>
            <div className='w-25'>
                <img 
                 src={watch} 
                 className='img-fluid' 
                 alt='product image' />
            </div>
            <div className='w-75'>
                <p>Đồng Hồ Nam</p>
                <p>Size: dsa</p>
                <p>Color: cvb</p>
            </div>
         </div>
         <div className='cart-col-2'>
            <h5 className='price'>10.000.000đ</h5>
         </div>
         <div className='cart-col-3 d-flex align-items-center gap-15'>
            <div>
                <input 
                 className='form-control' 
                 type='number' 
                 name=''
                 min={1}
                 max={10}
                 id='' 
                />
            </div>
            <div>
                <AiFillDelete className='text-danger' />
            </div>
         </div>
         <div className='cart-col-4'>
            <h5 className='price'>10.000.000đ</h5>
         </div>
        </div>
       </div>
       <div className='col-12 py-2 mt-4'>
        <div className='d-flex justify-content-between align-items-baseline'>
            <Link to='/product' className='button'>
                Tiếp Tục Mua Hàng
            </Link>
            <div className='d-flex flex-column align-items-end'>
                <h4>Tổng Cộng: 10.000.000đ</h4>
                <p>
                    Thuế và phí vận chuyển được tính khi thanh toán
                </p>
                <Link to='/checkout' className='button'>
                    Thanh Toán
                </Link>
            </div>
        </div>
       </div>
      </div>
    </Container>
   </>
  )
}

export default Cart