import React from 'react';
import {AiOutlineHome} from 'react-icons/ai';

const CustomCard = ({ icon, title, descr }) => {
    <div>
        <span>{icon}</span>
        <p>{title}</p>
        <p>{descr}</p>

    </div>

}
const DashboardRightNav = () => {
  return (
    <div>
       <CustomCard title="Posts" descr="total" />
       <CustomCard title="Posts" descr="total" />
       <CustomCard title="Posts" descr="total" />

       <section>
        <h2>Recent Posts</h2>
       </section>
       <section>
        <h2>Trending Posts</h2>
       </section>
    </div>
  )
}

export default DashboardRightNav