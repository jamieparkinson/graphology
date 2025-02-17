import Graph, {Attributes} from 'graphology-types';

type SubGraphFilter<NodeAttributes extends Attributes = Attributes> = (
  key: string,
  attributes: NodeAttributes
) => boolean;
type SubGraphNodes<NodeAttributes extends Attributes = Attributes> =
  | Array<string>
  | Set<string>
  | SubGraphFilter<NodeAttributes>;

export default function subgraph<
  NodeAttributes extends Attributes = Attributes
>(
  graph: Graph<NodeAttributes>,
  nodes: SubGraphNodes<NodeAttributes>
): Graph<NodeAttributes>;
