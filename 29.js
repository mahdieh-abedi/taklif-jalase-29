// 0. https://quera.ir/problemset/591/
function printSquare(n,sign='*'){
    let square=''
    for(let j=0; j<n; j++){
      if(j===0 || j===n-1){
          square +=sign.repeat(n)+'\n'
      }
      else
      {
          square +=sign + ' '.repeat(n-2)+sign+'\n'
      }
    }
    return square
}
console.log(printSquare(5))

//     1. https://quera.ir/problemset/9774/
const printNumbers=(input) =>{
    if(!input && input!==0){
        return ''
    }
    input =input.toString()
    let arrInput = input.split('')
    let result=''
    arrInput.map(num=>{
        result +=`${num}:`
        for( let i=0; i<num; i++){
            result += num
        }
        result +='\n'
    })
    return result
}
console.log(printNumbers(5136))

//     2. با استفاده از روش خودبازگشتی در توابع تابعی بنویسید که یک رشته را از ورودی گرفته و برعکس آن‌را برگرداند.
function reverseString(str){
    return str ? reverseString(str.substr(1))+str[0] :str
}
console.log(reverseString("ABCD"))

// 3. تابعی بنویسید که دو رشته به عنوان ورودی بگیرید و اگر رشته دوم در رشته اول وجود داشت اندیس آن‌را برگرداند.
function printDuplicateIndex(longstr,shortstr){
    if(typeof longstr!=='string' || typeof shortstr!=='string')
        return -1
    if(shortstr.length>longstr.length)
        return -1
    for(let i=0; i<longstr.length-shortstr.length+1;i++){
        for(let j=0; j<shortstr.length; j++){
            if(longstr[i+j] !== shortstr[j]){
                break
            }
            if(j===shortstr.length-1){
                return i
            }
        }
    }
    return -1
}
console.log(printDuplicateIndex("asdfghjk",'ghjk'))

// 4. تابعی بنویسید که دو آرایه را از ورودی گرفته و آیتم‌های آرایه دوم را از آرایه اول حذف کرده و باقی‌مانده آرایه اول را برگرداند.
function deleteDuplicate(arr1,arr2){
    arr1=arr1.filter(item=>!arr2.includes(item))
    return arr1
}
console.log(deleteDuplicate([1,2,3,4],[1,5.6]))

// 5. تابعی بنویسید که یک آرایه و دو عدد index و offset را گرفته و آیتم موجود در index را به اندازه offset در جهت مثبت یا منفی (راست یا چپ در آرایه) انتقال دهد.

// 6. تابعی بنویسید که یک رشته را به عنوان ورودی گرفته و کاراکترهای تکراری مجاور هم را حذف کند و فقط یکی از آن‌ها را باقی بگذارد. مثال: ورودی) aabbbcdd خروجی) abcd
const removeDuplicate=(str)=>{
    let filter =''
    let lastchar=''
    for (let char of str){
        if(lastchar!==char){
            filter +=char
            lastchar= char
        }
    }
    return filter
}
console.log(removeDuplicate("aaaaaabbbbbcccccdddeef"))