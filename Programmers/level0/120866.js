function solution(board){
    if(board.length===1){
        if(board[0][0]===0){
            return 1;
        }
        else{
            return 0;
        }
    }
    else{
    let board2 = JSON.parse(JSON.stringify(board));
    for(let i=0; i<board.length; i++){
        for(let j=0; j<board.length; j++){
            if(board[i][j]===1){
                    if(i===0 && j===0){
                        board2[i][j+1]=1;
                        board2[i+1][j]=1;
                        board2[i+1][j+1]=1;
                    }

                    else if(i===0 && j===board.length-1){
                        board2[i][j-1]=1;
                        board2[i+1][j-1]=1;
                        board2[i+1][j]=1;
                    }
                    else if(i===0 && j!==board.length-1 && j!==0){
                        board2[i+1][j-1]=1;
                        board2[i+1][j]=1;
                        board2[i+1][j+1]=1;
                        board2[i][j-1]=1
                        board2[i][j+1]=1
                    }

                    else if(i===board.length-1 && j===0){
                        board2[i-1][j]=1;
                        board2[i-1][j+1]=1;
                        board2[i][j+1]=1;
                    }
                    else if(i===board.length-1 && j===board.length-1){
                        board2[i-1][j-1]=1;
                        board2[i-1][j]=1;
                        board2[i][j-1]=1;
                    }

                    else if(i===board.length-1 && j!==0 && j!==board.length-1){
                        board2[i-1][j-1]=1
                        board2[i-1][j]=1
                        board2[i-1][j+1]=1
                        board2[i][j-1]=1
                        board2[i][j+1]=1
                    }

                    else{
                        board2[i-1][j-1]=1;
                        board2[i-1][j]=1;
                        board2[i-1][j+1]=1;
                        board2[i][j-1]=1;
                        board2[i][j+1]=1;
                        board2[i+1][j+1]=1;
                        board2[i+1][j-1]=1;
                        board2[i+1][j]=1;
                    }
                }
            }   
        }
        return board2.map(item=>item.filter(item2=>item2===0).length).reduce((a,b)=>a+b);
    }

}

console.log(solution([[1]]));
    