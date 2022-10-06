import classes from './Page.module.css';
import {useContext} from "react";
import {CarouselContext} from "./Context/Carousel-context";

export const Page = ({children}) => {

    const {width} = useContext(CarouselContext);
    return (
      <div
        className={classes.pageMainContainer}
        style={{
            minWidth: `${width}px`,
            maxWidth: `${width}px`,
            height: '100%',
        }}>
          {children}
        </div>
    )
}