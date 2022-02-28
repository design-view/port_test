import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ProductSlides = styled.article`
    div.textArea {
      text-align: center;
      margin-bottom: 50px;
    }
    > ul {
      display: flex;
      flex-wrap: wrap;
      overflow: hidden;
      justify-content: space-between;
      > li {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        width: 24%;
        img {
          border: 1px solid var(--gray);
          width: 100%;
        }
        a {
          color: var(--navy);
        }
        ul.pickedDesc {
          margin-top: 20px;
          text-align: center;
          width: 95%;
          li:nth-child(2) {
            margin: 10px;
          }
          button {
            width: 100%;
            text-decoration: underline;
            background: none;
            a {
              width: 100%;
            }
          }
        }
      }
    }
    @media only screen and (max-width: 990px) {
      > ul {
        > li {
          width: 49%;
        }
      }
    }

    @media only screen and (max-width: 750px) {
      > ul {
        justify-content: center;
        > li {
          width: 100%;
        }
      }
    }
`

function SquareSlider({recommendations}) {
  return (
    <ProductSlides>        
      <ul>
        {
          recommendations.map(product => (
            <li key={product.id}>
              <img className='toProduct' src={`../../img/${product.imgUrl}.jpg`} alt='bowl' />
              <ul className='pickedDesc'>
                <li>
                  <h3 className='toProduct'>{product.name}</h3>
                </li>
                <li>${product.price}</li>
                <li>
                  <button className='toProduct'>
                    <Link to={`/detailView/${product.id}&${product.collection}`}>SHOP NOW</Link>
                  </button>
                </li>
              </ul>
            </li>
          ))
        }
      </ul>
    </ProductSlides>
  );
}

export default SquareSlider;