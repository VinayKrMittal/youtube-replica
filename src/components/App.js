import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetails from './VideoDetail';

class App extends React.Component {
    state = { videos: [], selectedVideo: null };
    componentDidMount(){
        this.searchSubmit('children stories');
    }
    searchSubmit = async (term) => {
        console.log('form is submitted with term' + term);
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        this.setState({ videos: response.data.items,selectedVideo : response.data.items[0] });
    }
    onVideoSelect = (video) => {
        console.log('video selected', video);
        this.setState({ selectedVideo: video });
    }
    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.searchSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetails video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videos} onSelect={this.onVideoSelect} />
                        </div>
                    </div>

                </div>
            </div>
        )
    }

}

export default App;