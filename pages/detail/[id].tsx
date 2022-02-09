import { useRouter } from "next/router";
import { useEffect, useCallback, useState } from "react";
import Navbar from "../../components/organisms/navbar/index";
import Footer from "../../components/organisms/footer/index";
import TopUpForm from "../../components/organisms/topup-form";
import TopUpItem from "../../components/organisms/topup-item";
import { getDetailVoucher, getFeaturedGame } from "../../services/player";
import {
  GameItemTypes,
  NominalsTypes,
  PaymentsTypes,
} from "../../services/datatypes";

interface detailProps {
  dataItem: GameItemTypes;
  nominals: NominalsTypes[];
  payment: PaymentsTypes[];
}

export default function detail({ dataItem, nominals, payment }: detailProps) {
  useEffect(() => {
    localStorage.setItem("dataItem", JSON.stringify(dataItem));
  }, []);

  return (
    <>
      <Navbar />
      <section className="detail pt-lg-60 pb-50">
        <div className="container-xxl container-fluid">
          <div className="detail-header pb-50">
            <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10">
              Top Up
            </h2>
            <p className="text-lg color-palette-1 mb-0">
              Perkuat akun dan jadilah pemenang
            </p>
          </div>
          <div className="row">
            <TopUpItem type="mobile" data={dataItem} />
            <div className="col-xl-9 col-lg-8 col-md-7 ps-md-25">
              <TopUpItem type="desktop" data={dataItem} />
              <hr />
              <TopUpForm nominals={nominals} payments={payment} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const data = await getFeaturedGame();

  const paths = data.map((item: GameItemTypes) => ({
    params: {
      id: item._id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

interface GetStaticProps {
  params: {
    id: string;
  };
}

export async function getStaticProps({ params }: GetStaticProps) {
  const { id } = params;
  const data = await getDetailVoucher(id);

  return {
    props: {
      dataItem: data.voucher,
      nominals: data.voucher.nominals,
      payment: data.payment,
    },
  };
}
