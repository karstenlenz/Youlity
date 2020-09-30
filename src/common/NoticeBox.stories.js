import React from 'react'
import NoticeBox from './NoticeBox'
import TextLink from './TextLink'

export default {
  title: 'NoticeBox',
  component: NoticeBox,
}

export const ExampleNoticeBox = () => (
  <NoticeBox>
    <h3>Hinweis</h3>
    <p>
      Unser Testergebnis stellt nur eine Tendenz dar und ersetzt keine
      psychologische Beratung. Wenn Sie sich unwohl fühlen, holen Sie sich
      professionelle Hilfe.
    </p>
    <TextLink href="https://www.psychenet.de/de/hilfe-finden/schnelle-hilfe/krisenanlaufstellen.html">
      Ansprechpartner &gt;
    </TextLink>
  </NoticeBox>
)
