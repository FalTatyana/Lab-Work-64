import type { Props } from '../../type'
import './PostCard.css'

const PostCard = ({ time, title, message }: Props) => {
    return (
        <div className='postCard'>
            <h3 className='cardTitle'>{title}</h3>
            <p>{message}</p>
            <span className='cardDate'>
                 Creation date {time}
            </span>
        </div>
    )
}

export default PostCard