import React , {Component} from 'react'

class Tile extends Component{


  render(){

    const {college,position} = this.props

    return(
      <div id="tile">
        <div className="width-50 tile">
          {/* <div className={position % 2 == 0 ? "image-container" : "image-container second"}  */}
          <div className="image-container flex"
            style={{
              "background": `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/${college.image}')`
            }}>
            {college.promoted?
              <div className="promoted text-white">
                <p>PROMOTED</p>
              </div>
              :''
            }
           
            <div className="rating text-white font-small">
              <p className=""><span className="">{college.rating}</span>/5</p>
              <p>{college.rating_remarks}</p>
            </div>
            <div className="image-bottom text-white flex">
              <div className="tags flex">
                {college.tags.map(tag =>
                  <div className="tag">
                    <p className="font-small">{tag}</p>
                  </div>
                )}
              </div>
              <div>
                <p className="ranking font-small">
                  #{college.ranking}
                </p>

              </div>
            </div>
            
          </div>

          <div className="college-info flex">
            <div className="description">

              <div className="college-name-rating flex">
                <h3 className="college-name text-black">{college.college_name}</h3>
                <div className="star-ratings">
                  <div className="star-ratings-top" style={{"width":`${college.rating*20}%`}}>
                    <span>&#9733;</span>
                    <span>&#9733;</span>
                    <span>&#9733;</span>
                    <span>&#9733;</span>
                    <span>&#9733;</span>
                  </div>
                  <div className="star-ratings-bottom">
                    <span>&#9733;</span>
                    <span>&#9733;</span>
                    <span>&#9733;</span>
                    <span>&#9733;</span>
                    <span>&#9733;</span>
                  </div>
                </div>
              </div>
              
              <p className="famous-nearest-place font-small">
                <span className="text-black">{college.nearest_place[0]}</span>
                <span className="text-gray"> | {college.nearest_place[1]} </span>
              </p>
              <p className="nearest-place"><span>93% Match :</span> {college.famous_nearest_places}</p>

            </div>
            <div className="fees">
              <div className="flex flex-fees">
                <p className="original-fees"><del>₹{college.original_fees.toLocaleString()}</del></p>
                <p className="discount">&#9679; {college.discount}</p>
              </div>

              <p className="discounted-fees">₹{college.discounted_fees.toLocaleString()}</p>
              <p className="fees-cycle">{college.fees_cycle}</p>

            </div>

          </div>

          <div className="tile-bottom flex">
            <div className="offer">
              <p>{college.offertext}</p>
            </div>
            <div className="amneties flex">
              {college.amenties.map(amneity => <p>{amneity}</p>)}
            </div>
          </div>

          
        </div>
      </div>
    )
  }
}

export default Tile