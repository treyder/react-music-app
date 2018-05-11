export default function fetchMoviesByTitleMock(url) {
    return new Promise((resolve, reject) => {
        process.nextTick(
          () =>
            resolve({json: function() {
                return {
                    data: [
                        {
                            id:0,
                            title: "some title",
                            poster_path: "img_src",
                            genres: ["test genre"],
                            vote_count: 1055
                        }
                    ]
                }
            }})  
        );
      });
};