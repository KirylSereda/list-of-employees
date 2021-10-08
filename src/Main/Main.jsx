import style from './Main.module.css'

function Main() {
    return (
        <div className={style.main_container}>
          <div className={style.main_inner}>
          Вы можете озникомиться с персоналом компании перейдя на страницу "сотрудники".
          </div  >
        </div>
    )
}

export default Main;