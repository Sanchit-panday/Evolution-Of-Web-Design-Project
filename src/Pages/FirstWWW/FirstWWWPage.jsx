export default function FirstWWWPage() {
  return (
    <>
      <div style={{ margin: "8px" }}>
        <h1>World Wide Web</h1>
        The WorldWideWeb (W3) is a wide-area
        <a href=""> hypermedia </a> information retrieval initiative aiming to
        give universal access to a large universe of documents.
        <p style={{ marginBlockStart: "1em", marginBlockEnd: "1em" }}>
          Everything there is online about W3 is linked directly or indirectly
          to this document, including an executive summary of the project,
          Mailing lists , Policy , November's W3 news , Frequently Asked
          Questions .
        </p>
        <dl>
          <dt>
            <a name="44" href="../DataSources/Top.html">
              What's out there?
            </a>
          </dt>
          <dd style={{marginInlineStart: "40px"}}>
            {" "}
            Pointers to the world's online information,
            <a name="45" href="../DataSources/bySubject/Overview.html">
              {" "}
              subjects
            </a>
            ,{" "}
            <a name="z54" href="../DataSources/WWW/Servers.html">
              W3 servers
            </a>
            , etc.
          </dd>
          <dt>
            <a name="46" href="Help.html">
              Help
            </a>
          </dt>
          <dd style={{marginInlineStart: "40px"}}> on the browser you are using</dd>
          <dt>
            <a name="13" href="Status.html">
              Software Products
            </a>
          </dt>
          <dd style={{marginInlineStart: "40px"}}>
            {" "}
            A list of W3 project components and their current state. (e.g.{" "}
            <a name="27" href="LineMode/Browser.html">
              Line Mode
            </a>{" "}
            ,X11{" "}
            <a name="35" href="Status.html#35">
              Viola
            </a>{" "}
            ,{" "}
            <a name="26" href="NeXT/WorldWideWeb.html">
              NeXTStep
            </a>
            ,{" "}
            <a name="25" href="Daemon/Overview.html">
              Servers
            </a>{" "}
            ,{" "}
            <a name="51" href="Tools/Overview.html">
              Tools
            </a>{" "}
            ,
            <a name="53" href="MailRobot/Overview.html">
              {" "}
              Mail robot
            </a>{" "}
            ,
            <a name="52" href="Status.html#57">
              Library
            </a>{" "}
            )
          </dd>
          <dt>
            <a name="47" href="Technical.html">
              Technical
            </a>
          </dt>
          <dd style={{marginInlineStart: "40px"}}> Details of protocols, formats, program internals etc</dd>
          <dt>
            <a name="40" href="Bibliography.html">
              Bibliography
            </a>
          </dt>
          <dd style={{marginInlineStart: "40px"}}> Paper documentation on W3 and references.</dd>
          <dt>
            <a name="14" href="People.html">
              People
            </a>
          </dt>
          <dd style={{marginInlineStart: "40px"}}> A list of some people involved in the project.</dd>
          <dt>
            <a name="15" href="History.html">
              History
            </a>
          </dt>
          <dd style={{marginInlineStart: "40px"}}> A summary of the history of the project.</dd>
          <dt>
            <a name="37" href="Helping.html">
              How can I help
            </a>{" "}
            ?
          </dt>
          <dd style={{marginInlineStart: "40px"}}> If you would like to support the web..</dd>
          <dt>
            <a name="48" href="../README.html">
              Getting code
            </a>
          </dt>
          <dd style={{marginInlineStart: "40px"}}>
            {" "}
            Getting the code by
            <a name="49" href="LineMode/Defaults/Distribution.html">
              anonymous FTP
            </a>{" "}
            , etc.
          </dd>
        </dl>
      </div>
    </>
  );
}
