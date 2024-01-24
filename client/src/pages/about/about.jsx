import React from 'react'
import styles from './about.module.scss'

import star from '../../assets/star.jpg'

const About = () => {
  return (
    <main className={styles.about}>
      <h2>Om os</h2>
      <div className={styles.grid}>
        <div className={styles.text}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus quam est voluptate officia, tempora quisquam eum labore quaerat dolores aliquam, alias tenetur velit a doloribus! Totam doloribus quaerat quibusdam aliquid. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed maxime repellendus cupiditate saepe iure alias corporis assumenda, ab, voluptatum accusantium ipsa mollitia quasi blanditiis molestias eaque deleniti a in esse! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam vel fugit quidem commodi cupiditate assumenda consectetur magni nesciunt, libero explicabo suscipit molestias dignissimos sed enim itaque minus possimus architecto? Tempora? Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dicta velit vitae libero voluptatem totam, voluptas magni modi eius, alias architecto aliquam. Dolore nobis eligendi assumenda facere, eaque reprehenderit provident!</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam ex fuga non reprehenderit error, veniam nesciunt maxime ipsum recusandae, atque culpa dicta. Totam officia nesciunt iusto officiis sapiente, repellat exercitationem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit placeat quo, sequi, quis sed adipisci delectus est recusandae impedit fugiat, quam dolores asperiores. Ex nostrum voluptates minus modi asperiores non!</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam ex fuga non reprehenderit error, veniam nesciunt maxime ipsum recusandae, atque culpa dicta. Totam officia nesciunt iusto officiis sapiente, repellat exercitationem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit placeat quo, sequi, quis sed adipisci delectus est recusandae impedit fugiat, quam dolores asperiores. Ex nostrum voluptates minus modi asperiores non!</p>
        </div>
        <img src={star} alt="Star" />
      </div>
    </main>
  )
}

export default About
