
const MainNew = () => {
  return (
    <>
      <main>
        <section className="section">
          <div className="container">
            <h2 className="sec_title">Обо мне</h2>
          </div>
          <div className="sec_box">
            <img src="niga.png" alt="" />
          </div>
          <div className="sec_card">
            <h2 className="sec_title1">Зубенко Михаил Петрович</h2>
            <p className="sec_text">Я могу делать семейные портреты в студии, работать на показах мод, снимать
              моделей для рекламы или фотографировать на свадьбах. Отдельное направление -- съёмки
              предметов и еды, которые заказывают для рекламы или меню ресторанов. Я могу быть
              криминальным фотографом мест преступлений, охотником за знаменитостями или снимать диких
              животных для журналов о природе. Я востребованный специалист в новостных изданиях, работаю в
              паре с журналистом и могу оказаться где угодно: от гламурной вечеринки до места пожара,
              наводнения и даже вооруженного конфликта. Моя профессия будет востребована и в будущем, ведь
              80% успеха фотографии -- это не качество техники, а профессионализм фотографа.</p>
          </div>
        </section>
        <section className="section1">
          <div className="container">
            <h2 className="sec_title">Мои работы</h2>
          </div>
          <div className="work_box">
            <div className="work_card"></div>
          </div>
        </section>
      </main>
    </>
  )
}

export default MainNew