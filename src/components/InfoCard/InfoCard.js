//styles
import { Wrapper } from "./InfoCard.styled";
import { useFetchCategories } from "../../customHooks/useFetchCategories";
function InfoCard() {
  const { categories } = useFetchCategories();
  return (
    <Wrapper>
      <h1>lorem ipsum</h1>
      {console.log(categories)}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem enim
        aperiam ea. Sequi rerum odio sunt, quos tenetur repellendus cumque iusto
        nesciunt cupiditate accusantium voluptates alias, tempora harum rem
        temporibus?
      </p>
    </Wrapper>
  );
}

export default InfoCard;
