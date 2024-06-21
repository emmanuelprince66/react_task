import { useEffect } from "react";
import { useState } from "react";
import MkdSDK from "../utils/MkdSDK";
import update from "immutability-helper";

export function useVideos() {
  const [videos, setVideos] = useState({
    page: 1,
    limit: 10,
    total: 0,
    numPages: 0,
    list: [],
  });

  useEffect(() => {
    async function fetchVideos() {
      const sdk = new MkdSDK();

      const videosData = await sdk.callRestAPI(
        {
          page: videos.page,
          limit: videos.limit,
        },
        "PAGINATE"
      );

      setVideos({
        page: videosData.page,
        limit: videosData.limit,
        total: videosData.total,
        list: videosData.list,
        numPages: videosData.num_pages,
      });
    }
    fetchVideos();
  }, [videos.page, videos.limit]);

  const noNextPage = videos.page === videos.numPages;
  const noPrevPage = videos.page === 1;

  const nextPage = () => {
    if (noNextPage) {
      return;
    }

    setVideos({
      ...videos,
      page: videos.page + 1,
    });
  };

  const prevPage = () => {
    if (noPrevPage) {
      return;
    }
    setVideos({
      ...videos,
      page: videos.page - 1,
    });
  };

  const rearrangeList = (index1, index2) => {
    if (typeof index1 === "undefined" || typeof index2 === "undefined") {
      return;
    }
    const newVideos = update(videos.list, {
      $splice: [
        [index1, 1],
        [index2, 0, videos.list[index1]],
      ],
    });

    setVideos({
      ...videos,
      list: newVideos,
    });
  };

  return {
    videos,
    noNextPage,
    noPrevPage,
    nextPage,
    prevPage,
    rearrangeList,
  };
}
