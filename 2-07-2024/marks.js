const result = (marks) => {
    let percentage = 0;
    for(let i=0;i<marks.length;i++)
    {
        percentage += marks[i];
        
    }

    return percentage / marks.length;
}
export default result;