import React from 'react';

function SearchVideoCard({ data }) {
  const {
    snippet: { channelTitle, description, title, thumbnails, liveBroadcastContent },
  } = data;

  return (
    <div className="flex flex-row gap-2 ml-5 mr-3 ">

      <div>
        <img
          className="max-w-[24rem] max-h-[15rem] hover:rounded-none rounded-md"
          src={thumbnails?.high?.url}
          alt="thumbnail-img"
        />
      </div>
      <div className="flex flex-col justify-start gap-2 ml-3">
        <div className="text-lg mr-5">{title}</div>
        <div className="text-sm text-gray-500">{channelTitle}</div>
        <div className="text-sm text-gray-700">{description}</div>
        {liveBroadcastContent === "live" && <div><span className='px-3 text-slate-50 text-center text-sm rounded-sm w-4 bg-red-700'>Live</span></div>}
      </div>

    </div>
  );
}

export default SearchVideoCard;
