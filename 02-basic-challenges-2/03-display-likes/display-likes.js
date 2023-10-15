function displayLikes(names) {
    let msg = ''
    const length = names.length;
    if(length === 1)
        msg = `${names[i]} likes this`
    else if (length === 2)
        msg = `${names[0], names[1]} like this`
    else if (length === 3)
        msg = `${names[0], names[1], names[2]} like this`
    else if (length >= 3)
        msg = `${names[0], names[1]} and ${length -2} others like this`
    else 
        msg = 'no one likes this'
    return msg
}

module.exports = displayLikes;
