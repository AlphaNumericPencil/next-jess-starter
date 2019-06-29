

import Layout from '../components/Layout.js';
import Link from 'next/link';
import Tile from '../components/Tile';

const PostLink = props => (
    <li>
        <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
);

export default function Blog() {
    return (
        <Layout>
            <div id="main">
                <Tile title={"Magna feugiat lorem"} description="Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit." image="static/images/fulls/01.jpg" />
                <Tile title="Nisl adipiscing" description="Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit." image="static/images/fulls/02.jpg" />
                <Tile title="Tempus aliquam veroeros" description="Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit." image="static/images/fulls/03.jpg" />
                <Tile title="Aliquam ipsum sed dolore" description="Aliquam ipsum sed dolore" image="static/images/fulls/04.jpg" />
                <Tile title="Cursis aliquam nisl" description="Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit." image="static/images/fulls/05.jpg" />
                <Tile title="Sed consequat phasellu" description="Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit." image="static/images/fulls/06.jpg" />
                <Tile title="Mauris id tellus arcu" description="Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit." image="static/images/fulls/07.jpg" />
                <Tile title="Nunc vehicula id nulla" description="Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit." image="static/images/fulls/08.jpg" />
                <Tile title="Neque et faucibus viverra" description="Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit." image="static/images/fulls/09.jpg" />
                <Tile title="Mattis ante fermentum" description="Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit." image="static/images/fulls/10.jpg" />
                <Tile title="Sed ac elementum arcu" description="Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit." image="static/images/fulls/11.jpg" />
                <Tile title="Vehicula id nulla dignissim" description="Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit." image="static/images/fulls/12.jpg" />
            </div>

            {/* <h1>My Blog</h1>
      <ul>
        <PostLink id="hello-nextjs" title="Hello Next.js" />
        <PostLink id="learn-nextjs" title="Learn Next.js is awesome" />
        <PostLink id="deploy-nextjs" title="Deploy apps with Zeit" />
      </ul> */}
        </Layout>

    );
}