import { Divider } from '@mui/material';
import * as React from 'react';
import tom_dial from '../Media/tom_dial.png';
import PostActionBar from './PostActionBar';

function Post()
{
    var title = "TITLE";
    var content = "aisjhdoih aisdho asopa hasop aopsdj ap a";
    var media = tom_dial;
    const [likeCount, setLikeCount] = React.useState(100);
    const [dislikeCount, setDislikeCount] = React.useState(69);
    const [isLike, setIslike] = React.useState(false);
    const [isDislike, setIsdislike] = React.useState(false);

    const like = () =>
    {   
        isLike ? setLikeCount(likeCount - 1) : setLikeCount(likeCount + 1);
        setIslike(!isLike);
        if (isDislike)
        {
            setDislikeCount(dislikeCount - 1);
        }
        setIsdislike(false);
    }

    const dislike = () =>
    {   
        isDislike ? setDislikeCount(dislikeCount - 1) : setDislikeCount(dislikeCount + 1);
        setIsdislike(!isDislike);  
        if (isLike)
        {
            setLikeCount(likeCount - 1);
        }
        setIslike(false);
    }


    return (
        <>
            <div className="w-4/12 ml-10">
                <p className='font-bold text-lg'>{title}</p>
                <p>{content}</p>
                <div className="m-auto flex flex-col bg-gray-400">
                    <img src={media} alt="" className="w-full" />
                </div>

                <div className='mb-8' />
                <PostActionBar likeCount={likeCount} dislikeCount={dislikeCount} like={like} dislike={dislike} isLike={isLike} isDislike={isDislike}/>
                <br/>
                <Divider/>
            </div>
        </>
    );
}

export default Post;