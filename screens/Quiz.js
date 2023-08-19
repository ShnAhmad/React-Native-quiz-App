import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet,ImageBackground, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { LoadingIndicator } from '../components/Loading';

export default function Quiz({ navigation,route }) {
  const [questions, setQuestions] = useState()
  const [quesNumber, setquesNumber] = useState(0)
  const [options, setOptions] = useState([])
  const [score, setScore] = useState(0)
  const [isLastCorrect, setIsLastCorrect] = useState();
  const[isloading,setIsloading]= useState(true);
  const{category,level}=route.params;
  const getQuiz = async () => {
    setIsloading(true)
    let url;
    if(category==='GN'){

      if(level==='Easy'){
    url='https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple&encode=url3986'
    
      }
      else if(level==='Medium'){
        url='https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple&encode=url3986'
      
      }
      else if(level==='Hard'){
        url='https://opentdb.com/api.php?amount=10&category=9&difficulty=hard&type=multiple&encode=url3986'
      
      }
    }

    else if(category==='CS'){

      if(level==='Easy'){
    url='https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple&encode=url3986'
    
      }
      else if(level==='Medium'){
        url='https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple&encode=url3986'
      
      }
      else if(level==='Hard'){
        url='https://opentdb.com/api.php?amount=10&category=18&difficulty=hard&type=multiple&encode=url3986'
      
      }
    }


else if(category==='MT'){

  if(level==='Easy'){
url='https://opentdb.com/api.php?amount=10&category=19&difficulty=hard&type=multiple&encode=url3986'

  }
  else if(level==='Medium'){
    url='https://opentdb.com/api.php?amount=10&category=19&difficulty=medium&type=multiple&encode=url3986'
  
  }
  else if(level==='Hard'){
    url='https://opentdb.com/api.php?amount=10&category=19&difficulty=hard&type=multiple&encode=url3986'
  
  }
}

else if(category==='HT'){

  if(level==='Easy'){
url='https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=multiple&encode=url3986'

  }
  else if(level==='Medium'){
    url='https://opentdb.com/api.php?amount=10&category=23&difficulty=medium&type=multiple&encode=url3986'
  
  }
  else if(level==='Hard'){
    url='https://opentdb.com/api.php?amount=10&category=23&difficulty=hard&type=multiple&encode=url3986'
  
  }
}

else if(category==='SP'){

  if(level==='Easy'){
url='https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple&encode=url3986'

  }
  else if(level==='Medium'){
    url='https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple&encode=url3986'
  
  }
  else if(level==='Hard'){
    url='https://opentdb.com/api.php?amount=10&category=21&difficulty=hard&type=multiple&encode=url3986'
  
  }
}



else if(category==='PO'){

  if(level==='Easy'){
url='https://opentdb.com/api.php?amount=10&category=24&difficulty=hard&type=multiple&encode=url3986'

  }
  else if(level==='Medium'){
    url='https://opentdb.com/api.php?amount=10&category=24&difficulty=medium&type=multiple&encode=url3986'
  
  }
  else if(level==='Hard'){
    url='https://opentdb.com/api.php?amount=10&category=24&difficulty=hard&type=multiple&encode=url3986'
  
  }
}

else if(category==='SN'){

  if(level==='Easy'){
url='https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=multiple&encode=url3986'

  }
  else if(level==='Medium'){
    url='https://opentdb.com/api.php?amount=10&category=17&difficulty=medium&type=multiple&encode=url3986'
  
  }
  else if(level==='Hard'){
    url='https://opentdb.com/api.php?amount=10&category=17&difficulty=hard&type=multiple&encode=url3986'
  
  }
}





   await fetch(url).then(async(response)=>{
    const data = await response.json();
   // console.log(data)
    // console.log(data.results)
    setQuestions(data.results)
    setOptions(genrateOptionsAndShuffle(data.results[0]))  
    setIsloading(false);  
   });

    
  }

  useEffect(() => {
    getQuiz();
  }, [])


  const handleSkip = () => {
    setquesNumber(quesNumber + 1)
    setOptions(genrateOptionsAndShuffle(questions[quesNumber + 1]))

  }
  const handlePrev = () => {
    if(isLastCorrect === 1) {
      setScore(score - 1)
    } 
    setquesNumber(quesNumber - 1)
    setOptions(genrateOptionsAndShuffle(questions[quesNumber - 1]))

  }

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  const genrateOptionsAndShuffle = (_question) => {
    const options = [..._question.incorrect_answers]
    options.push(_question.correct_answer)
    // console.log(options,'before')
    shuffleArray(options)
    // console.log(options,'after')
    return options;

  }

  const handleSelectOption = (_option) => {
    if (_option === questions[quesNumber].correct_answer) {
      setScore(score + 1)
      setIsLastCorrect(1);
    } else {
      setIsLastCorrect(0);
    }
    
    if (quesNumber !== 9) {
      setquesNumber(quesNumber + 1)
      setOptions(genrateOptionsAndShuffle(questions[quesNumber + 1]))

    }
    if(quesNumber === 9)
    {
      navigation.navigate('Result', {
        score: score,})
    }

  }
  
if(isloading){
  return <LoadingIndicator/>
}

  return (
    <ImageBackground source={require("../assets/aa.jpg")} style={styles.container}>
     {questions &&(
        <View>
          <View style={styles.top}>
            <Text style={{ color:'white', fontSize: 25, fontWeight: '900' }}>Q : {decodeURIComponent(questions[quesNumber].question)}</Text>
          </View>
          <View style={styles.optionscontainer}>
            <TouchableOpacity onPress={() => handleSelectOption(options[0])} style={styles.options}>
              <Text style={styles.optiontxt}>{decodeURIComponent(options[0])}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleSelectOption(options[1])} style={styles.options}>
              <Text style={styles.optiontxt}>{decodeURIComponent(options[1])}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleSelectOption(options[2])} style={styles.options}>
              <Text style={styles.optiontxt}>{decodeURIComponent(options[2])}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleSelectOption(options[3])} style={styles.options}>
              <Text style={styles.optiontxt}>{decodeURIComponent(options[3])}</Text>
            </TouchableOpacity>

          </View>
          <View style={styles.btnContainer}>
            {quesNumber !== 0 &&

              <TouchableOpacity style={styles.btn} onPress={() => handlePrev()}>
                <Text style={styles.btntxt}>Prev</Text>
              </TouchableOpacity >
            }

            {quesNumber !== 9 &&
              <TouchableOpacity onPress={() => handleSkip()} style={styles.btn}>
                <Text style={styles.btntxt}>Skip</Text>
              </TouchableOpacity>}

            {quesNumber === 9 &&
              <TouchableOpacity onPress={() => navigation.navigate('Result', {
                score: score,
              })} style={styles.btn}>
                <Text style={styles.btntxt}>show result</Text>
              </TouchableOpacity>
            }
          </View>
        </View>)}
      <StatusBar style="auto" />
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffafbd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  top: {
    // backgroundColor: '#8C0073',
    padding: 25,
    borderRadius: 12,
    marginBottom: 20,
    borderColor: 'blue',
    borderWidth: 2,
  },
  optionscontainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  options: {
    // backgroundColor: 'coral',
    padding: 10,
    width: '100%',
    paddingHorizontal: 50,
    marginBottom: 10,
    borderRadius: 12,
    borderColor: 'red',
    borderWidth: 2,
  },
  optiontxt: {
    color:'white',
    fontSize: 20,
    borderRadius: 5,
    padding: 10,
    fontWeight: '900'
  },
  btnContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
    // backgroundColor: 'coral',
    padding: 10,
    paddingHorizontal: 50,
    marginBottom: 10,
    borderRadius: 12,
    borderColor: '#800080',
    borderWidth: 2,
  },
  btntxt: {
    fontSize: 18,
    color:'#800080',
    borderRadius: 5,
    padding: 5,
    fontWeight: '900'
  },


});