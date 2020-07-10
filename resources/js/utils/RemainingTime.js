const RemainingTime = (date) => {
    const parseDate = new Date(date)
    const remain =   Date.now() - parseDate
    const days =  (remain/1000/60/60/24 ).toString().split(".")[0]
    const hours = ((remain/1000/60/60)%24).toString().split(".")[0]
    const minutes = (remain/1000/60).toString().split(".")[0]
    if (days === "0"){
        if (hours === "0") return minutes +" Minutes"
        else return hours.split("-")[0] +" Hours"
    }else return days.split("-")[0] +" Days"

}

export default RemainingTime
