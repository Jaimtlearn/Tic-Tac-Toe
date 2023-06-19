var board = [
    ['*','*','*'],
    ['*','*','*'],
    ['*','*','*']
]
var currentplayer = 'X'
function move(row,col){
    board[row][col] = currentplayer
    document.getElementById("Board").children[row*3+col].innerHTML = currentplayer

    output = WinnerCheck(board,currentplayer)
    // console.log(output)

    if (output == true){
        document.getElementById("Output").innerHTML = `Winner is ${currentplayer}`
        setTimeout(()=>{
            document.getElementById("Output").innerHTML = `Game Over`
        },1000)
        setTimeout(()=>{
            var elements = document.getElementsByClassName("cell")
            for(let i=0;i<elements.length;i++){
                elements[i].removeAttribute("one")
            }
            location.reload()
        },2000)
    }
    else if(isBoardFull(board) == true && output == false){
        document.getElementById("Output").innerHTML = `Its a Draw`
        setTimeout(()=>{
            document.getElementById("Output").innerHTML = `GameOver`   
        },1000)
        setTimeout(()=>{
            var elements = document.getElementsByClassName("cell")
            for(let i=0;i<elements.length;i++){
                elements[i].removeAttribute("one")
            }
            location.reload()
        })
    }

    if (currentplayer == 'X')   currentplayer = 'O'
    else currentplayer = 'X'  


}

function WinnerCheck(board){
    var r_check = RowCheck(board)
    var c_check = ColumnCheck(board)
    var d_check = DiagonalCheck(board)

    if (r_check == true || c_check == true || d_check == true) return true
    else return false
}

function RowCheck(board){
    for (let i=0;i<3;i++){
        // console.log(`Output for Row ${i} : ${board[i][0]} ${board[i][1]} ${board[i][2]}`)
        if(board[i][0] == board[i][1] && board[i][1] == board[i][2] && board[i][2] != '*'){
            return true
        }
    }
    return false
}
function ColumnCheck(board){
    for (let i=0;i<3;i++){
        if(board[0][i] == board[1][i] && board[1][i] == board[2][i] && board[2][i] != '*'){
            return true
        }
    }
    return false
}
function DiagonalCheck(board){
    if(board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[2][2]!='*'){
        return true
    }
    else if(board[2][0] == board[1][1] && board[1][1] == board[2][0] && board[2][0] != '*'){
        return true
    }
    else{
        return false
    }
}
function isBoardFull(board){
    for (let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            if(board[i][j] == '*'){
                return false
            }
        }
    }
    return true
}