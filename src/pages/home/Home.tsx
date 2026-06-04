import type { ReactNode } from 'react';
import './Home.css'

interface Props {
    children: ReactNode;
}

const Home = ({ children }: Props) => {
    return (
        <div className="promo container">
            <div className="promoTitle">
                <h3 className='postsTitle'> <i className="bi bi-postcard"></i> Latest Posts</h3>
                <span>Thoughts, stories and ideas <i className="bi bi-chat-heart"></i></span>
            </div>
            <div className="post">
                {children}
            </div>
        </div>
    )
}

export default Home