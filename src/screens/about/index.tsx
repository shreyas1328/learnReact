import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/reduxHooks";
import { customLoginAction } from "../../redux/slice/loginSlice";
import { useEffect } from "react";
import { getAllPosts } from "../../redux/slice/postsSlice";

export default function About() {
  const dispatch = useAppDispatch();
  const navigation = useNavigate();
  const posts = useAppSelector((state) => state.posts);

  const fetchApi = async (): Promise<void> => {
    try {
      dispatch(getAllPosts());
    } catch (ex) {}
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const onHome = (): void => {
    navigation("/");
  };

  const onLogout = (): void => {
    dispatch(customLoginAction(true));
  };

  const onReload = () => {
    fetchApi();
  }

  return (
    <div>
      <b>About</b>
      <br />
      <br />
      <button onClick={onHome}>Home</button>
      <button onClick={onReload}>Reload</button>
      <button onClick={onLogout}>Logout</button>
      <br />
      <br />
      {posts.loading && <p>...loading</p>}
      {posts.hasError && (
        <p>{`Error => code: ${posts?.error?.code} \n ${posts?.error?.message}`}</p>
      )}
      <br />
      <ul>
        {posts.data?.map((x) => (
          <li key={x.id}>{x.title}</li>
        ))}
      </ul>
    </div>
  );
}
