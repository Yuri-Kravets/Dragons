import classes from "./Carousel.module.css";
import {Children, cloneElement, useEffect, useState} from "react";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";



const PAGE_WIDTH = 450;

export const Carousel = ({children}) => {
    const [pages, setPages] = useState([]);
    const [offset, setOffset] = useState(0);

    const handleLeftArrowClick = () => {
        setOffset(currentOffset => {
            const newOffset = currentOffset + PAGE_WIDTH;

            console.log(newOffset);
            return Math.min(newOffset, 0);
        })

    }

    const handleRightArrowClick = () => {
        console.log('handleRightArrowClick');

        setOffset((currentOffset) => {
            const newOffset = currentOffset - PAGE_WIDTH;

            const maxOffset = -(PAGE_WIDTH * (pages.length - 1));

            console.log(newOffset, maxOffset);
            return Math.max(newOffset, maxOffset);
        })
    }

    useEffect(() => {
        setPages(
          Children.map(children, child => {
              return cloneElement(child, {
                  style: {
                      height: '100%',
                      maxWidth: `${PAGE_WIDTH}px`,
                      minWidth: `${PAGE_WIDTH}px`,
                  },
              })
          })
        )
    }, [])

    return (
      <div className={classes.mainContainer}>
          <FaChevronLeft className={classes.arrow} onClick={handleLeftArrowClick}/>

          <div className={classes.window}>
              <div className={classes.allPagesContainer}
                   style={{
                       transform: `translateX(${offset}px)`,
                   }}>
                  {pages}
              </div>
          </div>
          <FaChevronRight className={classes.arrow} onClick={handleRightArrowClick}/>
      </div>
    )
}
