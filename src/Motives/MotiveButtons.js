import React from 'react'
import styled from 'styled-components'
import Button from '../common/Button'
import InfoOverlay from '../common/InfoOverlay'

export default function MotiveButtons({ handleMotiveClick }) {
  const motiveData = [
    {
      name: 'Anerkennung',
      description: `<p>
    Das Motiv nach Anerkennung bedeutet, dass man von anderen
    Personen die Botschaft erhalten möchte, dass man als Person o.k.
    und liebenswert sowie kompetent ist, über Fähigkeiten oder über
    Attraktivität verfügt und insgesamt positive Eigenschaften
    aufweist. Man möchte z. B. hören:
  </p>
  <ul>
    <li>„Du bist als Person o. k.“</li>
    <li>„Du bist intelligent.“</li>
    <li>„Du siehst gut aus.“</li>
    <li>„Du bist attraktiv.“</li>
  </ul>`,
    },
    {
      name: 'Wichtigkeit',
      description: `<p>
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, eius ullam beatae dolor ipsum ut quis magnam iusto alias reiciendis suscipit illum commodi reprehenderit. Maxime numquam molestias, consequatur eos accusamus esse est consequuntur aut! Laudantium eligendi modi dolore soluta autem optio! Nisi dolor exercitationem beatae velit nam quisquam numquam earum voluptates enim, et totam quaerat, esse dolore. Quaerat cupiditate quidem doloribus aspernatur, molestiae nemo nisi distinctio dignissimos possimus, autem tenetur natus recusandae architecto. Dignissimos iste, ab quo cumque provident labore ad harum quam cum error saepe quidem magni ipsam laborum ipsa tempora, dolores eos accusamus consectetur quasi reiciendis suscipit soluta!
</p>
<ul>
  <li>„Du bist als Person lorem ipsum.“</li>
  <li>„Du bist lorem ipsum.“</li>
  <li>„Du siehst lorem ipsum aus.“</li>
  <li>„Du bist lorem ipsum.“</li>
</ul>`,
    },
    {
      name: 'Verlässlichkeit',
      description: `<p>
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, eius ullam beatae dolor ipsum ut quis magnam iusto alias reiciendis suscipit illum commodi reprehenderit. Maxime numquam molestias, consequatur eos accusamus esse est consequuntur aut! Laudantium eligendi modi dolore soluta autem optio! Nisi dolor exercitationem beatae velit nam quisquam numquam earum voluptates enim, et totam quaerat, esse dolore. Quaerat cupiditate quidem doloribus aspernatur, molestiae nemo nisi distinctio dignissimos possimus, autem tenetur natus recusandae architecto. Dignissimos iste, ab quo cumque provident labore ad harum quam cum error saepe quidem magni ipsam laborum ipsa tempora, dolores eos accusamus consectetur quasi reiciendis suscipit soluta!
</p>
<ul>
<li>„Du bist als Person lorem ipsum.“</li>
<li>„Du bist lorem ipsum.“</li>
<li>„Du siehst lorem ipsum aus.“</li>
<li>„Du bist lorem ipsum.“</li>
</ul>`,
    },
    {
      name: 'Solidarität',
      description: `<p>
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, eius ullam beatae dolor ipsum ut quis magnam iusto alias reiciendis suscipit illum commodi reprehenderit. Maxime numquam molestias, consequatur eos accusamus esse est consequuntur aut! Laudantium eligendi modi dolore soluta autem optio! Nisi dolor exercitationem beatae velit nam quisquam numquam earum voluptates enim, et totam quaerat, esse dolore. Quaerat cupiditate quidem doloribus aspernatur, molestiae nemo nisi distinctio dignissimos possimus, autem tenetur natus recusandae architecto. Dignissimos iste, ab quo cumque provident labore ad harum quam cum error saepe quidem magni ipsam laborum ipsa tempora, dolores eos accusamus consectetur quasi reiciendis suscipit soluta!
</p>
<ul>
<li>„Du bist als Person lorem ipsum.“</li>
<li>„Du bist lorem ipsum.“</li>
<li>„Du siehst lorem ipsum aus.“</li>
<li>„Du bist lorem ipsum.“</li>
</ul>`,
    },
    {
      name: 'Autonomie',
      description: `<p>
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, eius ullam beatae dolor ipsum ut quis magnam iusto alias reiciendis suscipit illum commodi reprehenderit. Maxime numquam molestias, consequatur eos accusamus esse est consequuntur aut! Laudantium eligendi modi dolore soluta autem optio! Nisi dolor exercitationem beatae velit nam quisquam numquam earum voluptates enim, et totam quaerat, esse dolore. Quaerat cupiditate quidem doloribus aspernatur, molestiae nemo nisi distinctio dignissimos possimus, autem tenetur natus recusandae architecto. Dignissimos iste, ab quo cumque provident labore ad harum quam cum error saepe quidem magni ipsam laborum ipsa tempora, dolores eos accusamus consectetur quasi reiciendis suscipit soluta!
</p>
<ul>
<li>„Du bist als Person lorem ipsum.“</li>
<li>„Du bist lorem ipsum.“</li>
<li>„Du siehst lorem ipsum aus.“</li>
<li>„Du bist lorem ipsum.“</li>
</ul>`,
    },
    {
      name: 'Grenzen',
      description: `<p>
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, eius ullam beatae dolor ipsum ut quis magnam iusto alias reiciendis suscipit illum commodi reprehenderit. Maxime numquam molestias, consequatur eos accusamus esse est consequuntur aut! Laudantium eligendi modi dolore soluta autem optio! Nisi dolor exercitationem beatae velit nam quisquam numquam earum voluptates enim, et totam quaerat, esse dolore. Quaerat cupiditate quidem doloribus aspernatur, molestiae nemo nisi distinctio dignissimos possimus, autem tenetur natus recusandae architecto. Dignissimos iste, ab quo cumque provident labore ad harum quam cum error saepe quidem magni ipsam laborum ipsa tempora, dolores eos accusamus consectetur quasi reiciendis suscipit soluta!
</p>
<ul>
<li>„Du bist als Person lorem ipsum.“</li>
<li>„Du bist lorem ipsum.“</li>
<li>„Du siehst lorem ipsum aus.“</li>
<li>„Du bist lorem ipsum.“</li>
</ul>`,
    },
  ]

  return (
    <ButtonList>
      {motiveData.map((motive) => {
        return (
          <>
            <Button
              key={motive.name}
              onClick={(event) => handleMotiveClick(event, motive.name)}
            >
              {motive.name}
            </Button>
            <InfoOverlay>{motive.description}</InfoOverlay>
          </>
        )
      })}
    </ButtonList>
  )
}

const ButtonList = styled.section`
  display: flex;
  flex-direction: column;

  button {
    height: 40px;
    margin-bottom: 20px;
  }
`
