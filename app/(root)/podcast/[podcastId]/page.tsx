import React from "react";

const PodcastDetaials = ({ params }: { params: { podcastId: string } }) => {
  return <p className="text-white-1">PodcastDetaials for {params.podcastId}</p>;
};

export default PodcastDetaials;
