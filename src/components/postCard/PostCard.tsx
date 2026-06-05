import type { PostApi, PostList } from '../../type'
import './PostCard.css'

interface Props {
    posts: PostApi[];
    onOpen: (post: PostApi) => void;
  }

const PostCard = ({ posts, onOpen }: Props) => {
    return (
        <>
            <div className="postCardWrapper">
                {posts.map(p => (
                    <div className='postCard' key={p.id}>
                        <div className="cardContent">
                            <h3 className='cardTitle'>{p.title}</h3>
                            <span className='cardDate'>
                                Creation date {p.date}
                            </span>
                        </div>
                        <div className="cardBtnWrapper">
                            <button className='cardBtn' onClick={() => onOpen(p)}>Read more <i className="bi bi-arrow-right"></i></button>
                        </div>
                    </div>
                ))};
            </div>
        </>
    )
}

export default PostCard