import React from 'react';
import {AiOutlineSearch} from 'react-icons/ai';

const DashboardMain = () => {
  return (
    <div>
        <div>
            <input type="text" />
            <span><AiOutlineSearch/></span>
        </div>

        <section>
            <h2>Text Editor</h2>

        </section>

        <section>
            <h2>Recent Posts</h2>
        </section>

        <section>
            <h2>Analytics</h2>
        </section>
        

    </div>
  )
}

export default DashboardMain