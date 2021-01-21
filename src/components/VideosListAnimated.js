import React, {Component} from 'react'
import './VideoListAnimated.css'
import {CSSTransition, TransitionGroup} from 'react-transition-group'

class VideosListAnimated extends Component {

  renderVideos() {

    const {videos} = this.props
    console.log(`videos: `, videos)
    return (
      videos.map(video => {
        return (
          <CSSTransition key={video.etag}
                         timeout={500}
                         classNames={"video"}
          >
            <li className="list-group-item">
              {video.snippet.title}
            </li>
          </CSSTransition>
        )
      })
    )
  }


  render() {
    const transitionOptions = {
      transitionName: "fade",
      transitionEnterTimeout: 500,
      transitionLeaveTimeout: 500,
    }

    if (!this.props.videos) {
      return <div>Loading videos...</div>
    }
    return (
      <ul className={"list-group"}>
        <TransitionGroup className={"video-items"}>
          {this.renderVideos()}
        </TransitionGroup>
      </ul>
    );
  }
}

export default VideosListAnimated