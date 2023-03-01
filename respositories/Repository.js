import BannerList from "./BannerList"
import GetEventByID from "./GetEventByID"

export default ($axios) => ({
    bannerlist: BannerList($axios),
    getevent: GetEventByID($axios)
})

