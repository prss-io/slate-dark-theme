import React from 'react';
import * as PRSS from 'prss';
import Header from '../resources/components/Header';
import Footer from '../resources/components/Footer';
import Page from '../resources/components/Page';

const Post = data => {
  PRSS.init(data);
  (window as any).PRSS = PRSS;

  const { content, title: postTitle } = PRSS.getProp('item');
  const sidebarHtml = PRSS.getProp('sidebarHtml');

  return (
    <Page className="page-single">
      <Header />
      <main>
        <div className="container main-container">
          <h2>{postTitle}</h2>
          <div className="row">
            <div className="col">
              <div className="content">
                <section className="post-content mb-3 pb-5">
                  <div
                    className="post-inner-content"
                    dangerouslySetInnerHTML={{
                      __html: content
                    }}
                  />
                </section>
              </div>
            </div>
            {sidebarHtml && (
              <div
                className="col-3"
                dangerouslySetInnerHTML={{
                  __html: sidebarHtml
                }}
              />
            )}
          </div>
        </div>
      </main>
      <Footer />
    </Page>
  );
};

export default Post;
