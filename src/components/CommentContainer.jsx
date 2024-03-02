import React from 'react'
import Comment from './Comment';

const commentsData = [
  {
    name: 'Amjadali',
    text: 'this vedeo is very good fantastic and outstanding i really like this because it is good',
    replies: [
      {
        name: 'Amjadali',
        text: 'this vedeo is very good fantastic and outstanding i really like this because it is good',
        replies: [],
      },
      {
        name: 'Amjadali',
        text: 'this vedeo is very good fantastic and outstanding i really like this because it is good',
        replies: [
          {
            name: 'Amjadali',
            text: 'this vedeo is very good fantastic and outstanding i really like this because it is good',
            replies: [
              {
                name: 'Amjadali',
                text: 'this vedeo is very good fantastic and outstanding i really like this because it is good',
                replies: [
                  {
                    name: 'Amjadali',
                    text: 'this vedeo is very good fantastic and outstanding i really like this because it is good',
                    replies: [
                      {
                        name: 'Amjadali',
                        text: 'this vedeo is very good fantastic and outstanding i really like this because it is good',
                        replies: [],
                      },
                    ],
                  },
                ],
              },
              {
                name: 'Amjadali',
                text: 'this vedeo is very good fantastic and outstanding i really like this because it is good',
                replies: [],
              },
            ],
          },
          {
            name: 'Amjadali',
            text: 'this vedeo is very good fantastic and outstanding i really like this because it is good',
            replies: [],
          },
        ],
      },
      {
        name: 'Amjadali',
        text: 'this vedeo is very good fantastic and outstanding i really like this because it is good',
        replies: [],
      },
    ],
  },
  {
    name: 'Amjadali',
    text: 'this vedeo is very good fantastic and outstanding i really like this because it is good',
    replies: [],
  },
  {
    name: 'Amjadali',
    text: 'this vedeo is very good fantastic and outstanding i really like this because it is good',
    replies: [],
  },
  {
    name: 'Amjadali',
    text: 'this vedeo is very good fantastic and outstanding i really like this because it is good',
    replies: [],
  },
];


const CommentList=({comments})=>{
  
return (
  <div>
    {comments.map((comment, index) => (
      <div key={index}>
        <Comment data={comment} />

        <div className="pl-5 border border-l-black ml-10">
          <CommentList comments={comment.replies} />
        </div>
      </div>
    ))}
  </div>
);

}

const CommentContainer = () => {
  return (
    <div >
        <h1 className='font-bold text-3xl'>Comments : </h1>
       <CommentList comments={commentsData}/>
    </div>
  )
}

export default CommentContainer